// jqClick
$('.portfolio button').click(function (e) {
    // Xóa class active ra khỏi button đang active
    $('button.active').removeClass('active');

    // Thêm class active vào button được click
    $(this).addClass('active');

    const dataValue = $(this).attr('data');//web-design
    //lấy 8 divs
    const allDivs = $('.portfolio > .row > div');
    if (dataValue == 'all') {
        //show all
        allDivs.show();
        return;
    }

    // Lấy divs tương ứng với button được click
    // ví dụ: .portfolio > .row > div[data=web-design]
    const showDivs = $(`.portfolio > .row > div[data=${dataValue}]`);
    const hideDivs = allDivs.not(showDivs);

    showDivs.show();//display:block
    hideDivs.hide();//display:none

});

$("form").validate({
    rules: {
        name: {
            required: true,
        },
        email: {
            required: true,
            email: true
        },
        message: {
            required: true
        }
    },
    messages: {
        name: {
            required: 'Please enter your name',
        },
        email: {
            required: 'Please enter your email',
            email: 'Please enter correct format. E.g: abc@gmail.com'
        },
        message: {
            required: 'Please enter your message'
        }
    }
});