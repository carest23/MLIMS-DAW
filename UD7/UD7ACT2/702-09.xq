let $books := (doc("bookstore.xml")/bookstore/book)
return <table>
<tr><th colspan="3">Boook List</th></tr>
<tr><th>Title</th><th>Author</th><th>Price</th></tr>
{
   for $x in $books   
   return <tr><td>{data($x/title)}</td><td>{data($x/author)}</td><td>{data($x/@price)}</td></tr>
}
</table>