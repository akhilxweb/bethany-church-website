import urllib.request
import re
import json
import os
import time

url = "https://www.youtube.com/@bethanychurchnarasaraopet5648/videos"
print("Fetching HTML from:", url)
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

video_ids = list(dict.fromkeys(re.findall(r'"videoId":"([^"]{11})"', html)))
print("Found video IDs:", len(video_ids))

os.makedirs('assets/yt', exist_ok=True)

count = 0
for vid in video_ids:
    if count >= 24:
        break
    try:
        img_url = f"https://img.youtube.com/vi/{vid}/maxresdefault.jpg"
        print(f"Downloading {vid} maxres...")
        req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
        img_data = urllib.request.urlopen(req).read()
        
        with open(f"assets/yt/{vid}.jpg", "wb") as f:
            f.write(img_data)
        count += 1
    except Exception as e:
        print(f"Failed maxres for {vid}, trying hqdefault...")
        try:
            img_url = f"https://img.youtube.com/vi/{vid}/hqdefault.jpg"
            req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            img_data = urllib.request.urlopen(req).read()
            with open(f"assets/yt/{vid}.jpg", "wb") as f:
                f.write(img_data)
            count += 1
        except Exception as e2:
            print(f"Failed {vid}: {e2}")

    time.sleep(0.2)

print("Downloaded", count, "thumbnails.")
