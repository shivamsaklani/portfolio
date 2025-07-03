import { HeroOrbit } from "./HeroOrbit"
import Sparkle from "@/assets/icons/sparkle.svg";
import StarIcon from "@/assets/icons/star.svg";

export const Space = () => {
  return (
    <>
      <HeroOrbit size={800} rotation={-130}>
        <StarIcon className="star-color size-28" />
      </HeroOrbit>
      <HeroOrbit size={770} rotation={60}>
        <StarIcon className="star-color size-16" />
      </HeroOrbit>
      <HeroOrbit size={610} rotation={-170}>
        <StarIcon className="star-color size-10" />
      </HeroOrbit>
      <HeroOrbit size={790} rotation={80}>
        <Sparkle className="opacity-5 star-color size-14" />
      </HeroOrbit>
      <HeroOrbit size={600} rotation={145}>
        <Sparkle className="opacity-5 star-color size-6" />
      </HeroOrbit>
      <HeroOrbit size={750} rotation={-200}>
        <StarIcon className="star-color size-32" />
      </HeroOrbit>
      <HeroOrbit size={710} rotation={175}>
        <StarIcon className="star-color size-14" />
      </HeroOrbit>
      <HeroOrbit size={730} rotation={-100}>
        <StarIcon className="star-color size-12" />
      </HeroOrbit>
      <HeroOrbit size={610} rotation={220}>
        <Sparkle className="opacity-5 star-color size-12" />
      </HeroOrbit>
      <HeroOrbit size={720} rotation={95}>
        <Sparkle className="opacity-5 star-color size-8" />
      </HeroOrbit>
      <HeroOrbit size={840} rotation={-150}>
        <Sparkle className="opacity-5 star-color size-12" />
      </HeroOrbit>
      <HeroOrbit size={750} rotation={260}>
        <Sparkle className="opacity-5 star-color size-6" />
      </HeroOrbit>
      <HeroOrbit size={760} rotation={-80}>
        <Sparkle className="opacity-5 star-color size-10" />
      </HeroOrbit>
      <HeroOrbit size={750} rotation={15}>
        <Sparkle className="opacity-5 star-color size-5" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={0}>
        <div className="star"> </div>

      </HeroOrbit>
    </>
  )
}
