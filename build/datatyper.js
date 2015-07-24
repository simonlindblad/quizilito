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
        }
    ]
}
