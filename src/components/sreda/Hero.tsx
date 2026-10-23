import { site } from "@/config/site";
import { common } from "@content/pages/common";
import { sreda } from "@content/pages/sreda";

// Первый экран v2: своя команда AI-агентов, 90 минут и PDF; справа — страницы PDF-инструкции веером. Факты — полосой под экраном.
export default function Hero() {
	const c = sreda.hero;
	return (
		<>
			<section className="hero">
				<div className="wrap hero-grid">
					<div>
						<p className="crumbs"><a href="/">{common.ui.home}</a><span>/</span>{c.crumb}</p>
						<div className="role"><span className="pill">{c.pill}</span></div>
						<h1 className="ph1">{c.h1}</h1>
						<p className="lead">{c.lead}</p>
						<div className="cta-row">
							<a className="btn p" href={site.contacts.telegram} target="_blank" rel="noopener" data-goal="cta_start_sreda">{c.button}</a>
							<a className="btn s" href="#team">{c.more}</a>
						</div>
					</div>
					<figure className="pdfan" aria-label={c.pdf.label}>
						<div className="pdfan-p">{c.pdf.alt.map((alt, k) => <img key={alt} src={`/images/site/sreda-pdf-${k + 1}.jpg`} alt={alt} width={560} height={792} />)}</div>
						<figcaption><p className="lbl">{c.pdf.label}</p><b>{c.pdf.cap}</b></figcaption>
					</figure>
				</div>
			</section>
			<div className="hfacts">
				<div className="wrap facts">{c.facts.map((f) => <div key={f.num}><b>{f.num}</b><span>{f.text}</span></div>)}</div>
			</div>
		</>
	);
}
