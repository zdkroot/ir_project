var drgSrc = null;

function handleDragStart(e)
{
    dragSrc = this;
    
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnter(e)
{
    this.addClass('drophover');
}

function handleDragLeave(e)
{
    this.removeClass('drophover');
}

/*function handleDragEnd(e)
{
    [].forEach.call(elems, function(elem))
    {
        elem.removeClass('drophover');
    }
}*/


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
        this.removeClass('drophover');
    }
    return false;
}

var elems = document.getElementsByClassName('drag');
[].forEach.call(elems, function(elem) {
    elem.addEventListener('dragstart', handleDragStart, false);
    elem.addEventListener('dragenter', handleDragEnter, false);
    elem.addEventListener('dragover', handleDragOver, false);
    elem.addEventListener('dragleave', handleDragLeave, false);
    //elem.addEventListener('dragend', handleDragEnd, false);
    elem.addEventListener('drop', handleDrop, false);
});

Element.prototype.hasClass = function(name) {
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
