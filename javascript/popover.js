// Initialize Bootstrap popover
document.addEventListener('DOMContentLoaded', function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        var popover = new bootstrap.Popover(popoverTriggerEl, {
            trigger: 'manual',  // Use manual trigger for full control
            placement: 'bottom',
            html: true
        });

        // Show popover on mouse enter and keep it open until mouse leaves both image and popover
        popoverTriggerEl.addEventListener('mouseenter', function () {
            popover.show();
        });

        popoverTriggerEl.addEventListener('mouseleave', function () {
            setTimeout(function () {
                if (!popoverTriggerEl.matches(':hover') && !document.querySelector('.popover:hover')) {
                    popover.hide();
                }
            }, 300); // Adjust the delay as needed
        });

        document.addEventListener('mouseleave', function () {
            if (!popoverTriggerEl.matches(':hover') && !document.querySelector('.popover:hover')) {
                popover.hide();
            }
        });

        return popover;
    });
});
