import ShortTag from "@/components/ui/ShortTag";
import { storyLeft, storyRight, type Milestone } from "@/data/about-v3";

export default function OurStorySection() {
  return (
    <section className="our-story">
      <div className="container">
        <div className="our-story-wrap">
          <div className="our-story-top">
            <ShortTag label="Our Story" />
            <div className="heading-wrap reveal-rise-lg">
              <h2 className="h2">From Frustration to Innovation: How We Built</h2>
            </div>
          </div>
          {/* The centre line fills and the points light up as the timeline scrolls by. */}
          <div className="our-story-bottom" data-scrub="timeline">
            <div className="our-story-left">
              {storyLeft.map((milestone) => (
                <div className="our-story-item-wrap" key={milestone.year}>
                  <div className="our-story-point hide-01" />
                  <MilestoneCard {...milestone} />
                  <div className="our-story-point" />
                </div>
              ))}
            </div>
            <div className="our-story-right">
              {storyRight.map((milestone) => (
                <div className="our-story-item-wrap" key={milestone.year}>
                  <div className="our-story-point" />
                  <div className="our-story-point hide-01" />
                  <MilestoneCard {...milestone} />
                </div>
              ))}
            </div>
            <div className="our-story-time-line-wrap">
              <div className="our-story-time-line">
                <div className="our-story-horizontal-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MilestoneCard({ year, text }: Milestone) {
  return (
    <div className="our-story-item-content reveal-up-blur">
      <div className="our-story-main-content">
        <h5 className="h5">{year}</h5>
        <p className="p-text-02 text-white-70">{text}</p>
      </div>
      <div className="our-story-item-shadow" />
    </div>
  );
}
