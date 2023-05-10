import React from "react";
import css from "./TimeLine.module.css";
import bkg from "./Background.png";
const TimeLine_2 = () => {
	return (
		<section
			className={css.HowItWorks + " container"}
			style={{ background: `var(--bkgSecondary)` }}>
			<div className={css.top}>
				<h2>Our Story</h2>
				<p className="secondary_mid_text">
					Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a,
					suscipit non, turpis.
				</p>
			</div>

			<div className={css.main}>
				<>
					<>
						<p
							style={{ gridArea: "s1" }}
							className={`secondary_small_text ${css.step}`}>
							2021
						</p>
					</>
					<article className={css.article} style={{ gridArea: "a1" }}>
						<h4>Business Conception</h4>
						<p className="secondary_text">
							Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
							Donec mollis hendrerit risus.
						</p>
					</article>
				</>
				<>
					<>
						<p
							className={`secondary_small_text ${css.step}`}
							style={{ gridArea: "s2" }}>
							2020
						</p>
					</>
					<article className={css.article} style={{ gridArea: "a2" }}>
						<h4>Legal Rewiew</h4>
						<p className="secondary_text">
							Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
							Donec mollis hendrerit risus.{" "}
						</p>
					</article>
				</>
				<>
					<>
						<p
							className={`secondary_small_text ${css.step}`}
							style={{ color: "#FA541C", gridArea: "s3" }}>
							2019
						</p>
					</>
					<article className={css.article} style={{ gridArea: "a3" }}>
						<h4>Infrastucture Design</h4>
						<p className="secondary_text">
							Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
							Donec mollis hendrerit risus.
						</p>
					</article>
				</>
				<>
					<>
						<p
							className={`secondary_small_text ${css.step}`}
							style={{ color: "#FA541C", gridArea: "s4" }}>
							2018
						</p>
					</>
					<article className={css.article} style={{ gridArea: "a4" }}>
						<h4>Company Established</h4>
						<p className="secondary_text">
							Curabitur ullamcorper ultricies nisi. Praesent nonummy mi in odio.
							Donec mollis hendrerit risus.
						</p>
					</article>
				</>
			</div>
		</section>
	);
};

export default TimeLine_2;
