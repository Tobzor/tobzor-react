import { useState, useEffect } from "react";

const useGetMarkdown = (projectId: string) => {
    const [markdown, setMarkdown] = useState("This is _Markdown_");

    useEffect(() => {
        const markdown = async () => {
            let path = require(`../../pages/${projectId}/index.md`);
            let res = await fetch(path);
            let data = await res.text();

            /*
            marked.setOptions({
                renderer: new marked.Renderer(),
                highlight: function(code) {
                    return require("highlight.js").highlightAuto(code).value;
                },
                pedantic: false,
                gfm: true,
                breaks: false,
                sanitize: false,
                smartLists: true,
                smartypants: false,
                xhtml: false
            });
            setMarkdown(marked(data));
            */
            setMarkdown(data);
        };

        markdown();
    }, [projectId]);

    return markdown;
};

export default useGetMarkdown;
