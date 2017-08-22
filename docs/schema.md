# Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
host_status     | boolean   | not null, default false

## cities
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null


## meetups
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
host_id     | integer   | not null, foreign key
city_id     | integer   | not null, foreign key
date        | string    | not null
time        | string    | not null
address     | string    | not null


## attendances
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
meetup_id   | integer   | not null, foreign key
attendee_id | integer   | not null, foreign key
