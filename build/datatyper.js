var data = {
    "title": "Datatyper",
    "questions": [
        {
            "description": "Vilket uttryck returnerar listan [1, 2, 3]?",
            "gist_id": "1bae92b8454b8cb2f94d",
            "alternatives": ["y[1:3]", "y[1:4]", "y[:1] + y[2] + y[3]"],
            "answer": "y[1:4]"
        }, {
            "description": "Vilket uttryck returnerar listan [6, 7, 8, 9]?",
            "alternatives": ["y[-1:-4:-1]", "y[-4:0]", "y[-4:]"],
            "answer": "y[-4:]"
        }, {
            "description": "Vilket uttryck returnerar listan [0, 1, 8, 9]?",
            "alternatives": ["y[2:8] = []", "y[:2] + y[8:]", "y[2:] + y[:8]"],
            "answer": "y[:2] + y[8:]"
        }, {
            "description": "Vilket uttryck returnerar listan [0, 2, 4, 6, 8]?",
            "alternatives": ["y[:-2:2]", "y[0:8:2]", "y[::2]"],
            "answer": "y[::2]"
        }
    ]
}
