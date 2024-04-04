"use client";
import React from "react";
import { DotButton, useDotButton } from "./RecommendDotButton";
import {
    PrevButton,
    NextButton,
    usePrevNextButtons,
} from "./RecommendArrowButton";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import sanitizeHtml from "sanitize-html";

const Recommend = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <section className="embla">
          <p className="recommend_title">おすすめ</p>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((item, index) => {
                        const price = new Intl.NumberFormat("en-US").format(
                            item.price
                        );

                        return (
                            <div className="embla__slide" key={index}>
                                <div className="embla__slide__number">
                                    <div className="slide__image__box">
                                        <Image
                                            src={item.image.url}
                                            width={200}
                                            height={120}
                                            alt={item.title}
                                            className="slide__image"
                                        />
                                    </div>
                                    <p className="slide_title">{item.title}</p>
                                    <p className="slide_price">{`￥${price}`}</p>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: sanitizeHtml(item.text),
                                        }}
                                        className="slide_text"
                                    ></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div>

                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={"embla__dot".concat(
                                index === selectedIndex
                                    ? " embla__dot--selected"
                                    : ""
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Recommend;
