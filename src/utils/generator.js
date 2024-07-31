import nunjucks from 'nunjucks'
import yaml from 'js-yaml'

export function generate(meta, template) {
  const meta_data = yaml.load(meta)
  const output = nunjucks.renderString(template, meta_data)
  return output
}
