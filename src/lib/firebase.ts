// src/lib/firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebaseプロジェクトの設定（.env.localから読み込む）
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  // 必要に応じて storageBucket や messagingSenderId なども追加できます
};

// すでに初期化済みであればそれを使い、なければ初期化
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// 認証とFirestoreをエクスポート
export const auth = getAuth(app);
export const db = getFirestore(app);
