import React from "react";
import css from "./TimeLine.module.css";
import bkg from './Background.png'
const TimeLine = () => {
	return (
		<section className={css.HowItWorks + " container"} style={{background: `url(${bkg})`}}>
			<div className={css.top}>
				<h2 className={css.white}>How It Works</h2>
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
							STEP 1
						</p>
					</>
					<article className={css.article} style={{ gridArea: "a1" }}>
						<h4 className={css.white}>Planning</h4>
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
							STEP 2
						</p>
					</>
					<article className={css.article} style={{ gridArea: "a2" }}>
						<h4 className={css.white}>Research</h4>
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
							STEP 3
						</p>
					</>
					<article className={css.article} style={{ gridArea: "a3" }}>
						<h4 className={css.white}>Optimizing</h4>
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
							STEP 4
						</p>
					</>
					<article className={css.article} style={{ gridArea: "a4" }}>
						<h4 className={css.white}>Results</h4>
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

export default TimeLine;
