<books>
{
for $x in collection(Bookstore)/bookstore/book
return <book>{$x/title}<authors>{count($x/author)}</authors></book>
}
</books>