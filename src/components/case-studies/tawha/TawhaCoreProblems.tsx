import Image from "next/image";
import { tawhaAssets, tawhaCopy } from "@/data/tawha-case-study";

type ProblemNodeProps = {
  title: string;
  body: string;
  position: "top" | "left" | "right" | "bottom";
};

function ProblemNode({ title, body, position }: ProblemNodeProps) {
  return (
    <article className={`tawha-core__node tawha-core__node--${position}`}>
      <h3 className="tawha-core__node-title">{title}</h3>
      <p className="tawha-core__node-body">{body}</p>
    </article>
  );
}

export function TawhaCoreProblems() {
  const { coreProblems } = tawhaCopy;
  const { coreProblemsHub } = tawhaAssets;

  return (
    <section className="tawha-core" aria-labelledby="tawha-core-heading">
      <div className="tawha-board">
        <article className="tawha-core__card">
          <h2 id="tawha-core-heading" className="tawha-core__title">
            {coreProblems.title}
          </h2>

          <div className="tawha-core__diagram">
            {coreProblems.items.map((item) => (
              <ProblemNode
                key={item.title}
                title={item.title}
                body={item.body}
                position={item.position}
              />
            ))}

            <div className="tawha-core__hub-wrap">
              <Image
                src={coreProblemsHub.src}
                alt=""
                width={coreProblemsHub.width}
                height={coreProblemsHub.height}
                className="tawha-core__hub"
                sizes="(max-width: 640px) 240px, 320px"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
