import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './style.css'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form>
                    <h1>Faça seu logo</h1>
                    <input placeholder="Sua ID"/>
                    <button className="button" type="submit">Entrar</button>
                    <a href="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Nao tenho cadastro
                    </a>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}