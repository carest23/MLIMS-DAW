<books>
{
for $x in collection(Bookstore)/bookstore/book
where number($x/@price) le 19.95
return <book>{$x/title}
{$x/year}</book>
}
</books>
