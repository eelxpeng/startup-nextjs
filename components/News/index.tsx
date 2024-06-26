import SectionTitle from "../Common/SectionTitle";

const News = () => {
  return (
    <>
      <section id="news" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="News"
            paragraph=""
            center
          />
          {/* <ul>
            <li>2024-02-17: We released <a href="https://huggingface.co/vistagi/Mixtral-8x7b-v0.1-sft">SFT</a> and <a href="https://huggingface.co/vistagi/Mixtral-8x7b-v0.1-dpo">DPO</a> finetuned Mixtral 8x7B MoE model. Blog on these two models are coming.</li>
          </ul> */}
          <ul className="list-none pl-0">
            <li className="mb-4 border-l-4 border-blue-500 pl-4 leading-6">
                <strong className="text-blue-500">2024-02-17:</strong> We released{' '}
                <a className="text-blue-500" href="https://marketplace.visualstudio.com/items?itemName=Vistagi.vista-code-agent">
                Vista Code Agent
                </a>{', '}
                code agent that does more than just completing your code or answering your questions. More update to come soon.
            </li>
            <li className="mb-4 border-l-4 border-blue-500 pl-4 leading-6">
                <strong className="text-blue-500">2024-02-17:</strong> We released{' '}
                <a className="text-blue-500" href="https://huggingface.co/vistagi/Mixtral-8x7b-v0.1-sft">
                SFT
                </a>{' '}
                and{' '}
                <a className="text-blue-500" href="https://huggingface.co/vistagi/Mixtral-8x7b-v0.1-dpo">
                DPO
                </a>{' '}
                finetuned Mixtral 8x7B MoE model. Blog on the training of these two models is <a href="/blog-details/blog-2024-02-24" className="styled-link">here</a>.
            </li>
        </ul>
        </div>
      </section>
    </>
  );
};

export default News;
