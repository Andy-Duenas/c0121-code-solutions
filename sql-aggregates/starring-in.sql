select "name" as "listOfMovies",
        count("name") as "numberOfMovies"
  from  "categories"
  join "filmCategory" using ("categoryId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  where "firstName" = 'Lisa' and "lastName" = 'Monroe'
  group by "name";
