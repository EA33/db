(() => {
    $('.video__inner').on('click', '.video__play', function (e) {
        let $self = $(this);

        $self
            .prev('.video__iframe')
            .attr('src', $self.data('youtubeSrc'))
            .end()
            .fadeOut();
    });

})();