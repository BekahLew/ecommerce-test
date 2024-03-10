import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skoPquwA9c0OU7ZqirRbHqWrRUb8KPU0K7tAAqiDpWtWw73ogrX8bgI4EkBPFNgjWwtnLi9VaIK1zFSbkmhf0HmSRquwmS1F4DpdQhNJv91LYfGxVUyHZPFkVmplnFufpLblq5ZTLRLJS1Qv5MLA3ICbP2qwugTCBzT17kNCF37h0eC8lGWQ"
})
