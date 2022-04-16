/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [bill, setBill] = useState();
  const [tipPorcent, setTipPorcent] = useState(0);
  const [numPeople, setNumPeople] = useState();
  const [tip, setTip] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const reset = () => {
    setBill("");
    setTipPorcent(0);
    setNumPeople("");
    setTip(0);
    setTipAmount(0);
    setTotal(0);
  };

  useEffect(() => {
    if (bill && tipPorcent && numPeople) {
      setTipAmount((bill * tipPorcent) / numPeople);
      setTotal(bill / numPeople + tipAmount);
    }
  }, [tipPorcent, bill, tip, total, tipAmount, numPeople]);

  return (
    <>
      <Head>
        <title>Tip Calculator</title>
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <main>
        {/* Logo */}
        <div className="container">
          <div className="logo">
            <Image src="/logo.svg" width={120} height={80} />
          </div>

          {/* Box tip */}

          <div className="box-tip">
            {/* Left side */}
            <div className="left-side">
              <div className="bill">
                <label>Valor da conta</label>
                <div className="input-container">
                  <input
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                  />
                  <span id="box_icone_busca">
                    <i
                      style={{ color: "#A6B6B6" }}
                      id="icone_busca"
                      className="fa fa-dollar"
                    ></i>
                  </span>
                </div>
              </div>
              <div className="select-tip">
                <span>Selecione porcentagem da gorjeta</span>
                <div className="container-buttons">
                  <div className="top-buttons">
                    <button onClick={() => setTipPorcent(0.05)}>5%</button>
                    <button onClick={() => setTipPorcent(0.1)}>10%</button>
                    <button onClick={() => setTipPorcent(0.15)}>15%</button>
                  </div>
                  <div className="bottom-buttons">
                    <button onClick={() => setTipPorcent(0.25)}>25%</button>
                    <button onClick={() => setTipPorcent(0.5)}>50%</button>
                    <input
                      id="custom-buttom"
                      placeholder="Custom"
                      onChange={(e) => {
                        const custom = e.target.value;
                        setTipPorcent(custom / 100);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="number-of-people">
                <label>Número de pessoas</label>
                <div className="input-container">
                  <input
                    value={numPeople}
                    onClick={() => {
                      console.log("teste");
                      setNumPeople();
                    }}
                    onChange={(e) => setNumPeople(e.target.value)}
                  />
                  <span id="box_icone_busca">
                    <i
                      style={{ color: "#A6B6B6" }}
                      id="icone_busca"
                      className="fa fa-dollar"
                    ></i>
                  </span>
                </div>
              </div>
            </div>

            {/* Right side */}

            <div className="right-side">
              <div className="content-right-side">
                <div className="tip-amount">
                  <div className="content-tip-amount">
                    <h2>Valor da gorjeta</h2>
                    <span>/ pessoa</span>
                  </div>
                  <div className="result-tip-amount">
                    <span className="results">${tipAmount.toFixed(2)}</span>
                  </div>
                </div>
                <div className="total">
                  <div className="content-total">
                    <h2>Total</h2>
                    <span>/ pessoa</span>
                  </div>
                  <div className="result-total">
                    <span className="results">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="container-button">
                <button onClick={() => reset()}>RESETAR</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
