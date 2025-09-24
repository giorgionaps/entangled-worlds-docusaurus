// src/pages/index.js
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { Rocket, ClipboardList } from "lucide-react";
import useBaseUrl from '@docusaurus/useBaseUrl';


export default function Home() {
  return (
    <Layout
      title="Portfolio & Entangled Worlds (Noita)"
      description="Technical writing portfolio and documentation hub for the Entangled Worlds mod."
    >
      <main className="home-hero">
        <section className="container hero-inner">
          <div className="hero-copy">
            <h1>Entangled Worlds (Noita) — and my portfolio</h1>
            <p>
              Welcome! This site hosts my technical writing portfolio and the official docs for
              <strong> Entangled Worlds</strong>, a Noita mod. 
            </p>
            <div className="cta">
              <Link className="button button--primary button--lg" to="/docs/intro">Read the Mod Docs</Link>
<Link
  className="button button--secondary button--lg"
  href="https://github.com/giorgionaps/entangled-worlds-docusaurus"
>
  View This Portfolio on GitHub
</Link>            </div>
          </div>
          <div className="hero-art">
            <img src="/entangled-worlds-docusaurus/img/hero-noita.png" alt="Entangled Worlds artwork" />
          </div>
        </section>

<section className="container">
  <div className="row home-cards">
    <div className="col col--6">
      <div className="card card--full-height">
        <div className="card__body">
          <div className="card__icon">
            <Rocket size={28} strokeWidth={1.8} />
          </div>
          <div>
            <h3>Get Started</h3>
            <p>Install and set up Entangled Worlds quickly.</p>
          </div>
        </div>
        <div className="card__footer">
          <Link className="button button--link" to={useBaseUrl('/docs/install')}>Installation guide →</Link>
        </div>
      </div>
    </div>

    <div className="col col--6">
      <div className="card card--full-height">
        <div className="card__body">
          <div className="card__icon">
            <ClipboardList size={28} strokeWidth={1.8} />
          </div>
          <div>
            <h3>Release Notes</h3>
            <p>See what’s new and improved in the latest version.</p>
          </div>
        </div>
        <div className="card__footer">
          <Link className="button button--link" to={useBaseUrl('/docs/release-notes')}>View release notes →</Link>
        </div>
      </div>
    </div>
  </div>
</section>
      </main>
    </Layout>
  );
}
