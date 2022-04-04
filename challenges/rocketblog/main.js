const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "32px",
    duration: 700,
    reset: true
});

scrollReveal.reveal(
    `header, .divider, main, .bottom-content`
    , { interval: 100 }
);