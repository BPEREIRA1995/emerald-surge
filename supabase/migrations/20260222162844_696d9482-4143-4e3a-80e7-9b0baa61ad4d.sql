
CREATE TABLE public.page_visits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  referrer_source TEXT DEFAULT 'direct',
  visited_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.page_visits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert visits" ON public.page_visits FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can read visits" ON public.page_visits FOR SELECT USING (true);
