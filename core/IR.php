<?php
/**
 * Incremental Rehearsal app
 *
 * Takes of set of knowns and unknowns and creates a
 * strangely arranged presentation for output to
 * powerpoint or in-browser slideshow.
 * 
 * @author    Zack Kismarton <zdkroot@gmail.com>
 * @version   0.1 - 2012-01-26
 */

/**
 * @param array $knowns
 * @param array $unknowns
 * @return array
 */
 
class IR {

    protected $knowns;
    protected $unknowns;
    protected $_presentation = array();

    public function __construct(&$knowns = NULL, &$unknowns = NULL)
    {
        if (!empty($knowns) && !empty($unknowns))
        {
            $this->knowns = $knowns;
            $this->unknowns = $unknowns;
        }
        else { echo "Please input both knowns and unknowns."; }
    }

    public function createPresentation()
    {
        for ($i=0; $i < count($this->unknowns); $i++)
        {
            /** Starts from one because arrays count from zero
             * and we need to use $j to take an array slice later
             */
                
            for ($j=1; $j < count($this->knowns) + 1; $j++)
            {
                /**
                 * Add current unknown to presentation array.
                 * Append the range of knowns to the presentation array.
                 * 
                 * Incriment the range taken from the known array by
                 * one on each pass by using the counter var ($j).
                 *
                 * Repeat inner loop '$known' times.
                 * Repeat outer loop '$unknown' times.
                 */

                $this->_presentation[] = $this->unknowns[$i];

                $this->_presentation = array_merge($this->_presentation, array_slice($this->knowns, 0, $j));
            }

            /* Append the most recently used unknown to the array of knowns */
            array_unshift($this->knowns, $this->unknowns[$i]);
        }
        return $this->_presentation;
    }
}
