import Head from "../head.jsx";
const Index = () => (
  <div className="w-100 pa2 sans-serif">
    <Head />

    <header>
      <h1>The League of Ordinary Gentlefolk</h1>
      <p>
        A warm and fuzzy group of thoughtful, compassionate and social video,
        card, and board game players. We coordinate on{" "}
        <a href="http://discordapp.com">Discord</a>, and play a variety of games
        ranging from casual to the more hardcore.
      </p>
    </header>
    <section>
      <h2>Become a Member</h2>
      <p>
        The League of Ordinary Gentlefolks is accepting new members, so long as
        you agree to abide by the <a href="#code-of-conduct">code of conduct</a>
        .
      </p>
      <p className="flex justify-center">
        <a
          className="f2 link dim br3 ph3 pv2 mb2 align-center justify-center white bg-blue"
          href="https://www.getdrip.com/forms/540409785/submissions/new"
          data-drip-show-form="540409785"
        >
          Apply to Join
        </a>
      </p>
    </section>
    <section id="code-of-conduct">
      <h2>Code of Conduct</h2>
      <ol>
        <li>
          Do not intentionally push people's buttons. Everyone has a bad day
          once in a while, but actively trolling and harassing others is
          unacceptable.
        </li>
        <li>
          Racist / sexist / genderist / homophobic / transphobic or other such
          language that demeans anyone based upon their identity will not be
          tolerated. We come from a wide variety of cultures & sensibilities,
          but we have to draw a hard line in the sand when it comes to these
          types of insults. _It’s OK if it’s a genuine mistake_, however we ask
          that you apologise and refrain from repeating the error.
        </li>
        <li>
          Mods are here to help the chat flow, remove unruly types, and keep the
          peace. They aren’t above anyone on the social pecking order beyond
          having (hopefully) good judgement and the ability to enforce the
          rules. Please respect their decisions & advisements towards making
          this a fun place for everyone to hangout.
        </li>
        <li>
          Use the channels we’ve created to talk about specific topics if you’re
          going to discuss them at length. There will be overlap (e.g. talking
          about anime themed music in #anime makes sense). Crossposting (sending
          the same message to multiple rooms) is frowned upon.
        </li>
        <li>
          Try not to dominate #general with a conversation that fits into a
          separate area. If an area doesn't exist and you'd like one, request it
          in the #meta channel.
        </li>
      </ol>
    </section>
  </div>
);

export default Index;
