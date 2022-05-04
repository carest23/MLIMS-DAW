<books>
{
for $x in collection(Bookstore)/bookstore/book
where ($x/year) > 2004 and ($x/title/@lang) = "en"
return <book>{$x/year}
{$x/title}</book>
}
</books>