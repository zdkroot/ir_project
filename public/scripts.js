const _selected = 'selected';
const _drop = 'drophover';
const draggables = document.getElementsByClassName('drag');

[].forEach.call(draggables, function(drag) {
    drag.addEventListener('dragstart', handleDragStart, false);
    drag.addEventListener('dragenter', handleDragEnter, false);
    drag.addEventListener('dragover', handleDragOver, false);
    drag.addEventListener('dragleave', handleDragLeave, false);
    drag.addEventListener('dragend', handleDragEnd, false);
    drag.addEventListener('drop', handleDrop, false);
    drag.addEventListener('click', toggleClass, true);
});

function handleDragStart(e)
{
    dragSrc = this;
    
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnter(e)
{
    this.addClass(_drop);
}

function handleDragLeave(e)
{
    this.removeClass(_drop);
}

function handleDragEnd(e)
{
    [].forEach.call(draggables, function(drag)
    {
        drag.removeClass(_drop);
    });
}

function handleDragOver(e)
{
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffet = 'move';

    return false;
}

function handleDrop(e)
{
    if (e.stopPropagation)
    {
        e.stopPropagation();
    }

    if ( dragSrc != this )
    {
        dragSrc.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
        this.removeClass(_drop);

        if (dragSrc.hasClass(_selected) && this.hasClass(_selected))
        { return; }
        else { swapClass(dragSrc, this, _selected); }
    }
    return false;
}


function toggleClass(e)
{
    if (e.preventDefault) {
        e.preventDefault();
    }
    this.toggleClass(_selected);
}

function swapClass(elemA, elemB, c)
{
    if (elemA.hasClass(c) || elemB.hasClass(c)) {
        elemA.toggleClass(c);
        elemB.toggleClass(c);
    }
    return;
}  

Element.prototype.toggleClass = function(name)
{
    if (this.hasClass(name))
    {
        this.removeClass(name);
    }
    else
    {
        this.addClass(name);
    }
};

Element.prototype.hasClass = function(name)
{
    return new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)").test(this.className);
};

Element.prototype.addClass = function(name)
{
    if(!this.hasClass(name))
    {
        this.className = this.className ? [this.className, name].join(' '): name
    }
};

Element.prototype.removeClass = function(name)
{
    if(this.hasClass(name))
    {
        var curClass = this.className;
        this.className = curClass.replace(new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)", "g"), "");
    }
};
