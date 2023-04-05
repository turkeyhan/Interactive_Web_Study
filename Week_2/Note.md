# 3. Finishing CSS basic syntax quickly  
  
## 3-1. Linking CSS to HTML  
* Step 1: Insert extern CSS file in editor using "link:css"  
* Step 2: Modify CSS file path  
* Step 3: Set CSS file character encoding method  
  
## 3-2. Selecting HTML component by CSS variously  
* Annotation in CSS: /* "code or explanation" */  
* Universal selector: Selecting all HTML components at once, mark = "*"  
* Tag selector: Selecting tag using tag name  
* Descendant selector: Selecting all childs and child elements  
* Child selector: Selecting direct childs, mark = ">"  
* Group selector: Selecting several elements by group  
* Order selector: Selecting by sequence among sibling elements  
* Sequence selector: Selecting by formula  
* Last component selector: Selecting last component among sibling components  
* Odd, Even selector: Selecting Odd or Even component  
* Property selector: Selecting by property value  
* Pseudo selector: Selecting pseudo component  
* Class selector: Selecting by class name  
* ID selector: Selecting by ID name  
  
## 3-3. Styling font  
* font-weight: Changing thickness of font  
* font-size: Changing size of font  
* font-family: Changing shape of font  
    * font site: Google web font, fontawesome ...etc  
* color: Changing color of font  
* line-height: Changing text line space  
* text-align: Specify text alignment direction  
* letter-spacing: Specify text spacing  
  
## 3-4. Set the size fo each area in web page  
* width, height: Specify width and hegiht  
* margin: Specify outer margin  
* padding: Specify inner margin  
* box-sizing: Specify padding while maintaining the original box size  
* border-width: Specify thickness of border  
* border-style: Specify shape of border  
* border-color: Specify color of border  
* border: Specify thickness, shape, color of border at once  
* inline: Inside of left and right of tags  
* block: Row  
* 'display: inline-block': Add block attribute to inline element  
* 'display: block': Inline to block  
  
## 3-5. Decorate the background of web page
* background-color: Specify background color  
* background-image: Insert background image  
    * background-repeat: Repeat background image  
    * background-position: Specify location of background image  
    * background-size: Specify size of background image  
    * background-attachment: Freeze the background image so it doesn't move  

## 3-6. Make up layout of web page  
* css reset
```html
*{
    margin: 0px;
    padding: 0px;
}
ul, ol{
    list-style: none;
}
a{
    text-decoration: none;
}
```
* float: Assign location of block elements left and right  
* position: Freely assign location of elements  
    * relative: Relative position of original location  
    * absolute: Absolute position of block or inline element to be based on  
    * fixed: Fix position of element in web page screen even if user scrolls web page  
* object-fit: fill contents specific area  
    * fill: Ignore the proportinos of elements and make them full  
    * cover: Filled with no margins while maintaining the proportions of the elements  
    * contain: Keeps the proportions of the element and fills the content so that it is not cut off  
* z-index: Specifies the z-order of overlapping elements  
* opacity: Set the transparency of an element  

