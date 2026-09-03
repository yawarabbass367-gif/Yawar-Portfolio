import { tawhaCopy } from "@/data/tawha-case-study";

export function TawhaProblemDiscovery() {
  const { problemDiscovery } = tawhaCopy;

  return (
    <section className="tawha-problem" aria-labelledby="tawha-problem-heading">
      <div className="tawha-board tawha-problem__stack">
        <article className="tawha-problem__card">
          <h2 id="tawha-problem-heading" className="tawha-problem__title">
            {problemDiscovery.title}
          </h2>
          <p className="tawha-problem__lead">{problemDiscovery.lead}</p>

          <ul className="tawha-problem__pills tawha-problem__pills--row" aria-label="Business tools">
            {problemDiscovery.businessTools.map((tool) => (
              <li key={tool}>
                <span className="tawha-problem__pill">{tool}</span>
              </li>
            ))}
          </ul>

          <p className="tawha-problem__bridge">{problemDiscovery.consumerIntro}</p>

          <ul className="tawha-problem__pills tawha-problem__pills--scatter" aria-label="Consumer apps">
            {problemDiscovery.consumerTools.map((tool, index) => (
              <li key={tool} data-scatter={index}>
                <span className="tawha-problem__pill">{tool}</span>
              </li>
            ))}
          </ul>

          <p className="tawha-problem__closing">{problemDiscovery.closing}</p>
        </article>

        <article className="tawha-problem__card">
          <h2 className="tawha-problem__title">{problemDiscovery.understanding.title}</h2>
          <p className="tawha-problem__lead">{problemDiscovery.understanding.lead}</p>

          <ul className="tawha-problem__insights">
            {problemDiscovery.understanding.items.map((item) => (
              <li key={item.title} className="tawha-problem__insight">
                <span className="tawha-problem__insight-icon" aria-hidden>
                  {item.icon}
                </span>
                <p className="tawha-problem__insight-text">
                  <strong>{item.title}</strong> {item.body}
                </p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
