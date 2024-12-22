import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description?: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Full-stack",
    Svg: require("@site/static/img/fullstack_developer.svg").default,
    description: (
      <>Both frontend and backend, with using TypeScript and Python</>
    ),
  },
  {
    title: "AI",
    Svg: require("@site/static/img/ai_technology.svg").default,
    description: <>Macine Learning & LLM</>,
  },
  {
    title: "Motion Graphics",
    Svg: require("@site/static/img/motion_graphics.svg").default,
    description: <>Adobe Premiere Pro, Source Filmmaker</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
