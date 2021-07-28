// Toggle effect

$(`.image-design`).click(function() {
    $(`.image-design`).toggle(700);
    $(`.text-design`).toggle(700);
});

$(`.text-design`).click(function() {
    $(`.image-design`).toggle(700);
    $(`.text-design`).toggle(700);
});
$(`.image-development`).click(function() {
    $(`.image-development`).toggle(700);
    $(`.text-development`).toggle(700);
});

$(`.text-development`).click(function() {
    $(`.image-development`).toggle(700);
    $(`.text-development`).toggle(700);
});

$(`.image-management`).click(function() {
    $(`.image-management`).toggle(700);
    $(`.text-management`).toggle(700);
});

$(`.text-management`).click(function() {
    $(`.image-management`).toggle(700);
    $(`.text-management`).toggle(700);
});


//form
let formValidation = () => {
    if ($(`#username`).val() == ``) {
        alert(`Fill in your Name`);
    } else if ($(`#email`).val() == ``) {
        alert(`Provide your E-mail address`)
    } else if ($(`#comment`).val() == ``) {
        alert(`Please provide your feedback so that we can serve you better.`)
    } else {
        userName = $(`#username`).val();
        alert(userName + ` we have received your feedback. This will help us serve you better`)
    }
}

// Hover effect

$(`.work1`).hover(function() {
        $(`.overlay1`).show(400);
    },
    () => {
        $(`.overlay1`).hide(400);
    }
)

$(`.work2`).hover(function() {
        $(`.overlay2`).show(400);
    },
    () => {
        $(`.overlay2`).hide(400);
    }
)

$(`.work3`).hover(function() {
        $(`.overlay3`).show(400);
    },
    () => {
        $(`.overlay3`).hide(400);
    }
)

$(`.work4`).hover(function() {
        $(`.overlay4`).show(400);
    },
    () => {
        $(`.overlay4`).hide(400);
    }
)

$(`.work5`).hover(function() {
        $(`.overlay5`).show(400);
    },
    () => {
        $(`.overlay5`).hide(400);
    }
)

$(`.work6`).hover(function() {
        $(`.overlay6`).show(400);
    },
    () => {
        $(`.overlay6`).hide(400);
    }
)

$(`.work7`).hover(function() {
        $(`.overlay7`).show(400);
    },
    () => {
        $(`.overlay7`).hide(400);
    }
)

$(`.work8`).hover(function() {
        $(`.overlay8`).show(400);
    },
    () => {
        $(`.overlay8`).hide(400);
    }
)