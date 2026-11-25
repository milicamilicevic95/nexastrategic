# python3 fillable.py <base.pdf> <out.pdf>  -> adds text fields from base.pdf.json
import json,sys,pymupdf
src,out=sys.argv[1],sys.argv[2];F=json.load(open(src+".json"));doc=pymupdf.open(src)
for i,f in enumerate(F):
    pg=doc[f["page"]];k=pg.rect.width/f["pw"]
    r=pymupdf.Rect(f["x"]*k,f["y"]*k,(f["x"]+f["w"])*k,(f["y"]+f["h"])*k)
    w=pymupdf.Widget();w.field_type=pymupdf.PDF_WIDGET_TYPE_TEXT;w.field_name=f"f{i+1}";w.rect=r;w.text_font="Helv"
    w.text_fontsize=9 if f["multi"] else min(10,max(7,r.height*0.6))
    if f["multi"]: w.field_flags|=pymupdf.PDF_TX_FIELD_IS_MULTILINE
    w.border_width=0;w.fill_color=None;w.text_color=(0.99,0.96,0.94) if f.get("light") else (0.17,0.07,0.07)
    pg.add_widget(w)
doc.save(out,garbage=3,deflate=True);print(out,len(F))
