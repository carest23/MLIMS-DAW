let $books := collection(Bookstore)/bookstore/book[@category="web"]

let $sum:= sum($books/@price)


return <table>
<tr><th colspan="3">Boook List</th></tr>
<tr><th>Title</th><th>Author</th><th>Price</th></tr>
{
   for $x in $books   
   return <tr><td>{data($x/title)}</td><td>{data($x/author)}</td><td align="right">{data($x/@price)}</td></tr>
}
<tr><th colspan="2">TOTAL</th><td>{$sum}</td></tr>
</table>