# Otakupedia

## Project Description
Using the Jikan api which gets information from the my anime list site, it will show the top rated/airing anime, and have a section where they can search various anime and add it to a section that lists the shows they have seen.<br>

## API and Data Sample
Initial Link:  https://api.jikan.moe/v3
```{
    “Author”: “@irfanDahir”,
    “Discord”: “https://discord.gg/4tvCr36”,
    “Version”: “3.4”,
    “JikanPHP”: “v2.16.7@2dc17ee5e619a1c3caa450e909dc538f2454ee30”,
    “Website”: “https://jikan.moe”,
    “Docs”: “https://jikan.docs.apiary.io”,
    “GitHub”: “https://github.com/jikan-me/jikan”,
    “PRODUCTION_API_URL”: “https://api.jikan.moe/v3/“,
    “STATUS_URL”: “https://status.jikan.moe”
}
```

Searching an actual anime:  https://api.jikan.moe/v3/search/anime?q=Grand Blue (there are more results, but that would take up a lot of space)
```
{
    “request_hash”: “request:search:a27da239b23b056ff8be4ae1c7c6915662099f19”,
    “request_cached”: true,
    “request_cache_expiry”: 332830,
    “results”: [
        {
            “mal_id”: 37105,
            “url”: “https://myanimelist.net/anime/37105/Grand_Blue”,
            “image_url”: “https://cdn.myanimelist.net/images/anime/1302/94882.jpg?s=3fc1cd740bf7ba7389dcd7aa9576af4e”,
            “title”: “Grand Blue”,
            “airing”: false,
            “synopsis”: “Iori Kitahara moves to the coastal town of Izu for his freshman year at its university, taking residence above Grand Blue, his uncle’s scuba diving shop. Iori has high hopes and dreams about having th…”,
            “type”: “TV”,
            “episodes”: 12,
            “score”: 8.4,
            “start_date”: “2018-07-14T00:00:00+00:00”,
            “end_date”: “2018-09-29T00:00:00+00:00”,
            “members”: 301641,
            “rated”: “PG-13”
        }]
}
```
## Wireframes
The wireframe is linked <a href="https://git.generalassemb.ly/kbongco/Otakupedia/blob/master/Otakupedia.png">Here for desktop</a>

### MVP/PostMVP
-have the JIKAN API working to show top/trending anime in the top/trending anime section, and show a small description or rating<br>
-have a section where they can add anime<br>
-have a search bar to search various anime<br>

POST-MVP:
-have randomizer generate a random anime if someone is looking for something new to watch<br>
-possibly throw in another API (maybe Ghibli API to also have movies)<br>
-use local storage?<br>

## Project Schedule
|  Day | Deliverable | Status
|---|---| ---|
|July 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|July 13| Project Approval, start on structure and pseudocode  | Complete
|July 14| JS Coding of functionality| Complete
|July 15| Designing and Testing| Complete
|July 16| MVP | Incomplete
|July 17| Presentations | Incomplete

## Priority Matrix
The priority matrix is linked <a href="https://photos.app.goo.gl/8uVCgdv83B3CCGRe9">here</a>

## Timeframes
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
|Project Prompt | H | 8hrs| 6hrs | 6hrs |
|Initial Core Structure | H | 2hrs| 2hrs | 2hrs |
| HTML Structure | H | 2.5hrs| 4hrs | -4hrs |
| Working with API | H | 3hrs| 5hrs | -hrs |
| Fixing functionality to have anime be displayed| H | 4hrs| 6hrs | -hrs |
| Adding functionality to search bar | H | 3hrs| 4hrs | 4hrs |
| Working on Design with CSS| H | 3hrs| 5hrs | 5hrs |
| Advanced CSS| L | 3hrs| -hrs | -hrs |
| Writing JS Code | H | 4hrs| 8hrs | 8hrs |
| Writing pseudocode | H | 2.5hrs| 2.5hrs | 2.5hrs |
| Testing of App| L | 3hrs| -hrs | -hrs |
| Total | H | 41.5hrs| 8hrs | 8hrs |
