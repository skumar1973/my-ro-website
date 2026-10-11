"use client";

import { useEffect, useState } from "react";
import { signInAnonymously } from "firebase/auth";
import {
  doc,
  getDoc,
  runTransaction,
  setDoc,
} from "firebase/firestore";

import { auth, db } from "@/lib/firebase";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function countVisitor() {
      try {
        const userCredential = await signInAnonymously(auth);
        const visitorId = userCredential.user.uid;
        const visitorRef = doc(db, "visitors", visitorId);
        const counterRef = doc(db, "counters", "website");
        const alreadyCounted = await getDoc(visitorRef);
        if (!alreadyCounted.exists()) {
                  console.log('not alreadyCounted.exists(): ');
          await runTransaction(db, async (transaction) => {
            const counterSnapshot = await transaction.get(counterRef);

            const currentCount = counterSnapshot.exists()
              ? Number(counterSnapshot.data().count ?? 0)
              : 0;
            transaction.set(
              counterRef,
              {
                count: currentCount + 1,
              },
              { merge: true }
            );

            transaction.set(visitorRef, {
              countedAt: new Date(),
            });
          });
        }
        const counterSnapshot = await getDoc(counterRef);
        if (!cancelled && counterSnapshot.exists()) {
          setCount(Number(counterSnapshot.data().count ?? 0));
        }
      } catch (error) {
        console.error("Visitor counter error:", error);
      }
    }

    countVisitor();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      {" "}
      <span>
        {count ?? "..."}
      </span>
    </div>
  );
}