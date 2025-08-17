"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation"; // <- importar aqui

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter(); // <- inicializar aqui

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aqui poderia ter lógica de autenticação real com API
    console.log("Login:", { email, senha });

    // Redirecionar para /chat
    router.push("/chat");
  };

  const handleGoogleLogin = () => {
    console.log("Login com Google acionado");
    router.push("/chat"); // se quiser redirecionar por aqui também
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 font-inter bg-gradient-to-br from-[#1A1A1A] via-[#2C2C2C] to-[#F2D04D]/40">
      <div className="w-full max-w-md rounded-3xl p-8 shadow-2xl backdrop-blur-lg bg-white/10 border border-white/10 text-white">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2C2C2C] to-[#F2D04D]/70 flex items-center justify-center text-5xl text-white shadow-lg">
            <FiUser />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-6 text-center select-none group">
            <h1 className="text-3xl font-mono font-semibold tracking-wide text-[#F2D04D] transition-all duration-300 ease-in-out group-hover:text-[#f5d000] group-hover:drop-shadow-[0_0_6px_#f5d000]">
              _Prometheus I.A
            </h1>
            <div className="mt-2 h-[2px] w-36 mx-auto bg-gradient-to-r from-[#F2D04D] to-transparent rounded-full transition-all duration-300 ease-in-out group-hover:w-52" />
          </div>

          <div className="relative">
            <FiMail className="absolute left-3 top-3 text-black" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border-b border-gray-400/50 focus:outline-none focus:border-[#F2D04D] placeholder-gray-400 text-white"
            />
          </div>

          <div className="relative">
            <FiLock className="absolute left-3 top-3 text-black" />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border-b border-gray-400/50 focus:outline-none focus:border-[#F2D04D] placeholder-gray-400 text-white"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#F2D04D]" />
              Lembrar-me
            </label>
            <a href="#" className="text-gray-300 hover:text-white">
              Esqueceu a senha?
            </a>
          </div>

          <button
            type="submit"
      className="w-full py-3 rounded-lg bg-[#0008] font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_#F2D04D] hover:scale-105"


          >
            ENTRAR
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            aria-label="Entrar com Google"
            className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-gradient-to-r from-[#2C2C2C]/80 via-[#1A1A1A]/80  font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_5px_#F2D04D] hover:scale-105 mt-4"
          >
            <FcGoogle size={24} />
            Entrar com Google
          </button>

          <p className="text-sm text-gray-300 text-center mt-4">
            Não tem uma conta?{" "}
            <Link href="/register" className="text-[#F2D04D] hover:text-white font-semibold transition">
              Registre-se
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
