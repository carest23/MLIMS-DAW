for $x in collection(bookstore.xml)/bookstore/book
order by $x/title
return $x/title