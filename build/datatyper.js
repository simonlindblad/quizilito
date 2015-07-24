var data = {
    "title": "Datatyper",
    "questions": [
		{
            "description": "Vilken operation ger strängen 'What is love?'",
			"gist_id": "8c75c94fda06565b1057",
            "alternatives": ["x[13]", "x[:13]", "x[13:]"],
            "answer": "x[:13]"
        }, {
            "description": "Vilken operation ger strängen 'Baby dont hurt me!'",
            "alternatives": ["x[14]", "x[:14]", "x[14:]"],
            "answer": "x[14:]"
        }, {
            "description": "Vilken operation ger strängen 'What!?'",
            "alternatives": ["x[4:12:-1]", "x[:4] + x[12] + x[-1]", "x[4:] + x[12:30:10]"],
            "answer": "x[:4] + x[12] + x[-1]"
        }, {
            "description": "Vilken operation ger listan [1, 2, 3]?",
            "gist_id": "1bae92b8454b8cb2f94d",
            "alternatives": ["y[1:3]", "y[1:4]", "y[1] + y[2] + y[:3]"],
            "answer": "y[1:4]"
        }, {
            "description": "Vilken operation ger listan [6, 7, 8]",
            "alternatives": ["y[-1:-4:-1]", "y[6:8]", "y[-4:-1]"],
            "answer": "y[-4:-1]"
        }, {
            "description": "Vilken operation ger listan [0, 1, 8, 9]",
            "alternatives": ["y - y[2:8]", "y[:2] + y[8:]", "y[2:] + y[:8]"],
            "answer": "y[:2] + y[8:]"
        }, {
            "description": "Vilken operation ger listan [0, 2, 4, 6, 8]",
            "alternatives": ["y[2:]", "y[:2]", "y[::2]"],
            "answer": "y[::2]"
        }
    ]
}
