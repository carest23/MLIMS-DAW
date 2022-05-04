<books>
{
  let $authors :=  collection(Bookstore)/bookstore/	book/author
for $x in distinct-values($authors)
order by $x
return <author>{$x}</author>
}
</books>