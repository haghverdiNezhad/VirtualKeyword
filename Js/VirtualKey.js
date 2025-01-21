$(document).ready(function () {
    let currentInput = null;
    $(".keyboard").append(`
            <div class="key" data-key="1">1</div>
            <div class="key" data-key="2">2</div>
            <div class="key" data-key="3">3</div>
            <div class="key" data-key="4">4</div>
            <div class="key" data-key="5">5</div>
            <div class="key" data-key="6">6</div>
            <div class="key" data-key="7">7</div>
            <div class="key" data-key="8">8</div>
            <div class="key" data-key="9">9</div>
            <div class="key" data-key="0">0</div>
            <div class="key delete" data-key="delete">حذف</div>
            <div class="key clear" data-key="clear">پاک کردن</div>
    `);
    $('input,textarea').focus(function () {
        currentInput = this;
        $('input,textarea').removeClass("focus");
        $(this).addClass("focus");
    });

    $(document).on('click', function (e) {
        if (!e.target.closest(".key") && !e.target.closest(".keyboard") && e.target.tagName != "INPUT" && e.target.tagName != "TEXTAREA") {
            console.log(e.target.tagName);
            $('input,textarea').removeClass("focus");
        }
    })

    $('.key').on('click', function () {
        if (currentInput.classList.contains("focus")) {
            const keyValue = this.getAttribute('data-key');

            if (keyValue === 'delete') {
                currentInput.value = currentInput.value.slice(0, -1);
            } else if (keyValue === 'clear') {
                currentInput.value = '';
            } else {
                currentInput.value += keyValue;
            }
        }
    });
})