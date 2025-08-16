"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

const Register: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registro:", { nome, email, senha });
  };

  const handleGoogleRegister = () => {
    console.log("Registro com Google acionado");
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
            <FiUser className="absolute left-3 top-3 text-black" />
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-transparent border-b border-gray-400/50 focus:outline-none focus:border-[#F2D04D] placeholder-gray-400 text-white"
            />
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

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-[#2C2C2C]/80 via-[#1A1A1A]/80 to-[#F2D04D]/70 font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_#F2D04D] hover:scale-105"
          >
            REGISTRAR
          </button>

          <button
            type="button"
            onClick={handleGoogleRegister}
            aria-label="Registrar com Google"
            className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-gradient-to-r from-[#2C2C2C]/80 via-[#1A1A1A]/80 to-[#F2D04D]/70 font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_5px_#F2D04D] hover:scale-105 mt-4"
          >
            <FcGoogle size={24} />
            Registrar com Google
          </button>

          <p className="text-sm text-gray-300 text-center mt-4">
            Já tem uma conta?{" "}
            <Link href="/login" className="text-[#F2D04D] hover:text-white font-semibold transition">
              Entrar
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
