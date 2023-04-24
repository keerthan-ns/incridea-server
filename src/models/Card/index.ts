import { builder } from "../../builder";
import "./mutationn"

builder.prismaObject("Card",{
    fields: (t) => ({
        id:t.exposeID("id"),
        clue:t.exposeString("clue"),
        day:t.exposeString("day"),
        submissions:t.relation("Submissions")
    })
});