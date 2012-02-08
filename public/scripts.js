var drgSrc = null;

function handleDragStart(e)
{
    dragSrc = this;
    
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnter(e)
{
    // change to hover class, dashed border or highlight
}

function handleDragOver (e) {
    if ( e.preventDefault ) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffet = 'move';

    return false;
}

function handleDrop(e)
{
    if ( e.stopPropagation ) {
        e.stopPropagation();
    }

    if ( dragSrc != this ) {
        dragSrc.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
        this.style.opacity = '1.0';
    }
    return false;
}

var elems = document.getElementsByClassName('drag');
[].forEach.call(elems, function(elem) {
    elem.addEventListener('dragstart', handleDragStart, false);
    elem.addEventListener('dragenter', handleDragEnter, false);
    elem.addEventListener('dragover', handleDragOver, false);
    elem.addEventListener('drop', handleDrop, false);
});
