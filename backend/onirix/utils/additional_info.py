import requests
from youtube_search import YoutubeSearch


def search_book(keyword):
    open_library_side = "https://openlibrary.org/search.json/?q=" + keyword
    response = requests.get(open_library_side)
    docs = response.json()["docs"][0:2]
    result = [{"title": elt["title"], "type": "book"} for elt in docs]
    return result


def search_on_youtube(keyword):
    youtube_site = "youtube.com"
    result = YoutubeSearch(keyword, max_results=2).to_dict()
    filter_result = [
        {
            "title": dictionary_value["title"],
            "link": youtube_site + dictionary_value["url_suffix"],
            "thumbnail": dictionary_value["thumbnails"][0],
            "type": "video"
        }
        for dictionary_value in result
    ]

    return filter_result


if __name__ == "__main__":
    # r = search_on_youtube("DT linux")
    r = search_book("mort")
    print(r)
