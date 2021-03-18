select "line1",
       "district",
       "cities"."name",
       "countries"."name" as "countryName"
  from "addresses"
  join "cities" using ("cityId")
  join "countries" using ("countryId");
