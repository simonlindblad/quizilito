var data = {
    "title": "Hejsan!",
    "questions": [
        {
            "description": "Vilket uttryck returnerar heltalet 2?",
            "gist_id": "17828f77063ab3946c22",
            "alternatives": ["x.count('ä')", "x.find('det där')", "x.strip()"],
            "answer": "x.count('ä')"
        }, {
            "description": "Vilket uttryck returnerar en exakt kopia av x?",
            "alternatives": ["x.strip().title()", "x.lstrip().replace('aldrig', 'ofta')", "x.split('!')[0] + '!'"],
            "answer": "x.split('!')[0] + '!'"
        }, {
            "description": "Vilket av följande uttryck returnerar ett värde?",
            "gist_id": "90bad65e763b70b7c115",
            "alternatives": ["x.remove(5)", "x.pop(5)", "x.append(5)"],
            "answer": "x.pop(5)"
        }, {
            "description": "Vilken av följande uttryck förändrar inte x?",
            "alternatives": ["x.reverse()", "x.sort()", "x.pop()"],
            "answer": "x.sort()"
        }
    ]
}
