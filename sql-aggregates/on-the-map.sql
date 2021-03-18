select "countries"."name" as "countryName",
       count("countryId") as "counties"
  from "cities"
  join "countries" using ("countryId")
  group by "countryId"
  order by "counties" desc;
